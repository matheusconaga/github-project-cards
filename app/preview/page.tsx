"use client";

import { useEffect, useMemo, useState } from "react";

const themes = ["dark", "light", "github", "dracula"];

export default function PreviewPage() {
  const [repo, setRepo] = useState("matheusconaga/projeto_patrimoniario");
  const [lang, setLang] = useState("pt");
  const [theme, setTheme] = useState("github");
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/matheusconaga/projeto_patrimoniario/main/assets/patrimoniario.png",
  );
  const [techs, setTechs] = useState("React, TypeScript, Node.js");
  const [showStars, setShowStars] = useState(true);
  const [showForks, setShowForks] = useState(true);

  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const previewUrl = useMemo(() => {
    const params = new URLSearchParams();

    params.set("repo", repo);
    params.set("lang", lang);
    params.set("theme", theme);

    if (image) {
      params.set("image", image);
    }

    if (techs) {
      params.set("techs", techs);
    }

    params.set("showStars", String(showStars));
    params.set("showForks", String(showForks));

    return `${baseUrl}/api/project-card?${params.toString()}`;
    
  }, [baseUrl, repo, lang, theme, image, techs, showStars, showForks]);

  const markdown = `![Project Card](${previewUrl})`;

  async function copyMarkdown() {
    await navigator.clipboard.writeText(markdown);
    alert("Markdown copied to clipboard!");
  }

  async function copyUrl() {
    await navigator.clipboard.writeText(previewUrl);
    alert("Copied to clipboard!");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "20px",
        fontFamily: "Inter, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          .sticky-panel { position: static !important; }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 800,
            }}
          >
            GitHub Card Builder
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "start",
          }}
        >
          <div
            className="sticky-panel"
            style={{
              background: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "18px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              position: "sticky",
              top: "20px",
              flex: "1 1 420px",
              maxWidth: "100%",
            }}
          >
            <h1 style={{ fontSize: "20px", fontWeight: 700 }}>Settings</h1>
            <Input
              label="Repository"
              value={repo}
              onChange={setRepo}
              placeholder="matheusconaga/projeto"
            />

            <div style={fieldStyle}>
              <label style={labelStyle}>Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                style={inputStyle}
              >
                {themes.map((themeName) => (
                  <option key={themeName} value={themeName}>
                    {themeName}
                  </option>
                ))}
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Language</label>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                style={inputStyle}
              >
                <option value="pt">Português</option>
                <option value="en">English</option>
              </select>
            </div>

            <Input
              label="Image URL"
              value={image}
              onChange={setImage}
              placeholder="https://raw.githubusercontent.com/..."
            />

            <Input
              label="Techs"
              value={techs}
              onChange={setTechs}
              placeholder="React, Node.js, PostgreSQL"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Checkbox
                label="Show Stars"
                checked={showStars}
                onChange={setShowStars}
              />
              <Checkbox
                label="Show Forks"
                checked={showForks}
                onChange={setShowForks}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              flex: "1 1 500px",
              minWidth: "280px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "18px",
                padding: "20px",
              }}
            >
              <h2
                style={{
                  marginBottom: "20px",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                Preview
              </h2>
              <div style={{ width: "100%", overflowX: "auto" }}>
                <img
                  src={previewUrl}
                  alt="preview"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "14px",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "18px",
                padding: "20px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "8px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    margin: "0 0 14px 0",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  Generated URL
                </h2>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <button onClick={copyMarkdown} style={buttonStyle}>
                    Copy Markdown
                  </button>

                  <button onClick={copyUrl} style={buttonStyle}>
                    Copy URL
                  </button>
                </div>
              </div>

              <textarea
                readOnly
                value={previewUrl}
                style={{
                  width: "100%",
                  flex: 1,
                  minHeight: "185px",

                  resize: "none",
                  background: "#020617",
                  border: "1px solid #334155",
                  color: "white",
                  borderRadius: "12px",
                  padding: "16px",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function Input({ label, value, onChange, placeholder }: InputProps) {
  return (
    <div style={fieldStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
}

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: "#cbd5e1",
        fontSize: "14px",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}

const fieldStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
};

const labelStyle = {
  fontSize: "14px",
  color: "#cbd5e1",
};

const inputStyle = {
  background: "#020617",
  border: "1px solid #334155",
  color: "white",
  borderRadius: "10px",
  padding: "12px 14px",
  outline: "none",
  width: "100%",
};

const buttonStyle = {
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  padding: "8px 14px",
  cursor: "pointer",
  fontWeight: 600,
};
