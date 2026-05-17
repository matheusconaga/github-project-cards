export async function getRepo(repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/${repo}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Erro ao buscar repositório");
  }

  return res.json();
}