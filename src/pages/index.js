import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// data
const links = [
  {
    text: "Discord",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "Acesse o nosso Discord!",
    color: "#E95800",
  },
  {
    text: "Youtube",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Acesse nosso YouTube",
    color: "#1099A8",
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Nicolas Cagezinho</title>
      <h1 style={headingStyles}>
        Nicolas Cagezinho
      </h1>
      <span>Dominando New World em nome do <strong>Sindicato</strong> no servidor <strong>SA East - TAMAG</strong>.</span>
      <h2><a href="https://discord.gg/YRDRHcCz57" target="_blank">Acessar nosso Discord</a><br /></h2>
      <h2><a href="https://www.youtube.com/watch?v=tuRLUhCWF3I" target="_blank">Vídeos do YouTube</a><br /></h2>

      <iframe
        width="720"
        height="410"
        src="https://www.youtube.com/embed/tuRLUhCWF3I"
        title="YouTube video player"
        frameborder="0"
        allow="loop=1; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe><br />

      <h5>- Página em desenvolvimento -</h5>
    </main>
  )
}

export default IndexPage
