import React from "react";
import type { Theme } from "@/core/themes/types";

export interface CardProps {
  title: string;
  description: string;
  stars: number;
  forks: number;
  image: string;
  fullname: string;

  theme: Theme;
  techs: string[];

  labels: {
    featured: string;
    view: string;
  };

  locale: string;
  showStars?: boolean;
  showForks?: boolean;
}

export function Card({
  title,
  description,
  stars,
  forks,
  image,
  fullname,
  theme,
  techs = ["react", "node", "typescript"],
  labels,
  showStars = true,
  showForks = true,
}: CardProps) {
  const surface = theme.background === "#ffffff" ? "#f8fafc" : "#111827";

  const surfaceSecondary =
    theme.background === "#ffffff" ? "#f1f5f9" : "#0f172a";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "850px",
        height: "360px",
        backgroundColor: theme.background,
        border: `2px solid ${theme.border}`,
        borderRadius: "12px",
        padding: "24px",
        fontFamily: "Inter",
        boxSizing: "border-box",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: surface,
            padding: "6px 14px",
            borderRadius: "6px",
            border: `1px solid ${theme.border}`,
          }}
        >
          <span style={{ color: theme.accent, fontSize: "14px" }}>★</span>
          <span
            style={{ color: theme.primary, fontSize: "14px", fontWeight: 700 }}
          >
            {labels.featured ?? "Featured project"}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{ color: theme.muted, fontSize: "14px", fontWeight: 500 }}
          >
            github.com/{fullname}
          </span>
          <svg height="16" width="16" viewBox="0 0 16 16" fill={theme.muted}>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          width: "100%",
          height: "250px",
        }}
      >
        <div style={{ display: "flex", width: "360px", height: "230px" }}>
          {image && (
            <img
              src={image}
              style={{
                width: "360px",
                height: "auto",
                borderRadius: "8px",
                border: `1px solid ${theme.border}`,
                objectFit: "contain",
              }}
            />
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "230px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: theme.primary,
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.5",
                color: theme.text,
                margin: 0,
                maxHeight: "72px",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            {techs.slice(0, 3).map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: surfaceSecondary,
                  padding: "4px 12px",
                  borderRadius: "12px",
                  border: `1px solid ${theme.border}`,
                  color: theme.primary,
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Linha Divisória */}
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: theme.muted,
            }}
          />

          {/* FOOTER INTERNO: Status e Botão */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              {showStars && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: theme.muted,
                    fontSize: "14px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={theme.accent}
                  >
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97 1.19 4.312a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l1.19-4.313L1.29 6.573a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
                  </svg>
                  <span style={{ fontWeight: 600, color: theme.text }}>
                    {stars}
                  </span>
                </div>
              )}
              {showForks && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: theme.muted,
                    fontSize: "14px",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill={theme.accent}
                  >
                    <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5A2.25 2.25 0 0 0 12.5 6.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878Zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm3.75-9.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  <span style={{ fontWeight: 600, color: theme.text }}>
                    {forks}
                  </span>
                </div>
              )}
            </div>

            <a>
              <div
                style={{
                  border: `1px solid ${theme.primary}`,
                  backgroundColor: surfaceSecondary,
                  padding: "6px 18px",
                  borderRadius: "20px",
                  color: theme.text,
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {labels.view ?? "View on GitHub"}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
