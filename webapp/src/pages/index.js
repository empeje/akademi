/* eslint-disable no-unused-vars*/
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
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
       Selamat datang!
        <br />
        <span style={headingAccentStyles}>— Segera hadir Akademi! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p style={paragraphStyles}>
        Program menarik akan segera hadir untukmu para penggemar crypto/blockchain/web3 di Indonesia.
      </p>
      <p style={paragraphStyles}>
        Selama beberapa bulan ke belakang kami fokus berbicara dan melakukan beberapa edukasi web3 ke berbagai komunitas di Indonesia termasuk di dalam nya adalah tentang smart contract.
      </p>
      <p style={paragraphStyles}>
        Kami mendapatkan grants dari Stacks Foundation untuk membangun Web3 Education Bootcamp berbasis Bitcoin pertama di Indonesia.
      </p>

      <h2>Bootcamp Angkatan #1</h2>
      <p style={paragraphStyles}>Diadakan 8-10 April 2022 bekerjasama dengan <a href="https://kulkul.tech">Kulkul Tech</a> telah meluluskan 8 orang profesional Web3 yang sekarang sudah membangun startup (e.g. <a href="https://twitter.com/niftickpay">NiftickPay</a>) yang sudah diterima di pre-accelerator ternama dan juga bekerja sebagai developer Web3.</p>
      <p style={paragraphStyles}>Berikut cuplikan video Bootcamp Angkatan #1</p>

      <iframe title="Part 1" src="https://drive.google.com/file/d/1rNPUoB4n7GfKb2El0LZQPD5qUMThTlwZ/preview" width="640" height="480" allow="autoplay"></iframe>

      <br />

      <iframe title="Part 2" src="https://drive.google.com/file/d/11RnmPjyrqsGzpwD2pZf8qYWxJIHb1DGv/preview" width="640" height="480" allow="autoplay"></iframe>

      <br />

      <iframe title="Part 3" src="https://drive.google.com/file/d/1oF6vUbltdASwiUgq7N0DL0PlM6bK3gFd/preview" width="640" height="480" allow="autoplay"></iframe>

      <br />

      <iframe title="Part 4" src="https://drive.google.com/file/d/18NlTUoHU8Kg68rN8Gv2RSPlhjAr-rZoj/preview" width="640" height="480" allow="autoplay"></iframe>

      <br />

      <iframe title="Part 5" src="https://drive.google.com/file/d/1ILJbLQ-SOsvcAD0E-irEpslYL704I4HJ/preview" width="640" height="480" allow="autoplay"></iframe>

      <h2>Bootcamp Angkatan #2: Segera Hadir 🚀</h2>
      <p style={paragraphStyles}>Setelah sukses dengan Angkatan pertama, kami sedang membuka Bootcamp Cohort ke-2 yang akan hadir di bulan Juli 2022 yang mana akan menghasilkan 20 orang lebih profesional Web3.</p>
      <p style={paragraphStyles}>Segera mendaftar <a href="webapp/src/pages/index">di sini</a> 🔥.</p>

      <p>Join our <a href="https://discord.gg/TEAJHURh2e">Discord now!🔥🔥🔥</a></p>

    </main>
  )
}

export default IndexPage
