<br>
<p align="center">
  <u><big> <b>Portfolio Website</b> </big></u>
</p>
<p align="center">
    <!-- Project Avatar/Logo -->
    <br>
    <a href="https://github.com/erik-t-irgens">
        <img style="border-radius: 50%; width: 200px " src="https://avatars.githubusercontent.com/u/49962295?v=4">
    </a>
    <p align="center">
      ___________________________
    </p>
    <!-- GitHub Link -->
    <p align="center">
        <a href="https://github.com/erik-t-irgens">
            <strong>erik-t-irgens</strong>
        </a>
    </p>
    <!-- Project Shields -->
    <p align="center">
        <a href="https://github.com/erik-t-irgens/erik-irgens-website/graphs/contributors">
            <img src="https://img.shields.io/github/contributors/erik-t-irgens/erik-irgens-website.svg?style=plastic">
        </a>
        ¨
        <a href="https://github.com/erik-t-irgens/erik-irgens-website/stargazers">
            <img src="https://img.shields.io/github/stars/erik-t-irgens/erik-irgens-website.svg?color=yellow&style=plastic">
        </a>
        ¨
        <a href="https://github.com/erik-t-irgens/erik-irgens-website/issues">
            <img src="https://img.shields.io/github/issues/erik-t-irgens/erik-irgens-website?style=plastic">
        </a>
        ¨
        <a href="https://github.com/erik-t-irgens/erik-irgens-website/blob/main/LICENSE.txt">
            <img src="https://img.shields.io/github/license/erik-t-irgens/erik-irgens-website?color=orange&style=plastic">
        </a>
        ¨
        <a href="https://linkedin.com/in/erik-t-irgens">
            <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=linkedin&colorB=2867B2">
        </a>
    </p>    
</p>

<p align="center">
  <small>Initiated December 2nd, 2019. Rebuilt September 2026.</small>
</p>

<!-- Project Links -->
<p align="center">
    <a href="https://github.com/erik-t-irgens/erik-irgens-website"><big>Project Docs</big></a> ·
    <a href="https://github.com/erik-t-irgens/erik-irgens-website/issues"><big>Report Bug</big></a> ·
    <a href="https://github.com/erik-t-irgens/erik-irgens-website/issues"><big>Request Feature</big></a>
</p>

------------------------------
### <u>Table of Contents</u>
* <a href="#-about-the-project">About the Project</a>
    * <a href="#-description">Description</a>
    * <a href="#-how-it-is-built">How it is built</a>
* <a href="#-getting-started">Getting Started</a>
    * <a href="#-prerequisites">Prerequisites</a>
    * <a href="#-run-it-locally">Run it locally</a>
    * <a href="#-editing-content">Editing content</a>
* <a href="#-deployment">Deployment</a>
* <a href="#-contributors">Contributors</a>
* <a href="#-license">License</a>

------------------------------

## 🌐 About the Project

### 📖 Description

A single-page portfolio for [erikirgens.com](https://erikirgens.com) with four sections: Welcome, About (skills and testimonials), Portfolio (software from GitHub, music from SoundCloud) and Contact. Every visual element is hand-written; there is no third-party UI framework.

### 🛠 How it is built

* [React 19](https://react.dev/) function components, no router or state library
* [Vite](https://vite.dev/) for the dev server and production build
* Plain CSS with custom properties (`src/styles/index.css`)
* Sections reveal with an `IntersectionObserver` (`src/hooks/useReveal.js`)
* Project cards read live data from the GitHub API and fall back to `src/data/projects.js` when rate-limited
* The contact form posts to a Google Form

```
src/
  components/   Header, Section, Welcome, About, Portfolio, Contact, ...
  data/         skills, testimonials, projects, music (edit these to change content)
  hooks/        useReveal, useGitHubRepo
  assets/       WebP backgrounds, avatar, SVG icons
  styles/       index.css
public/         favicon, manifest, robots.txt
docs/           website-audit.md (the review that led to the rebuild)
```

## 🏁 Getting Started

### 📋 Prerequisites

* [Node.js](https://nodejs.org/) 20 or newer (the CI uses 22) and npm.

### ⚙️ Run it locally

```bash
git clone https://github.com/erik-t-irgens/erik-irgens-website.git
cd erik-irgens-website
npm install
npm run dev          # http://localhost:5173
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run build:preview` | Single-file build to `dist-preview/index.html`, handy for sharing a preview |

### ✏️ Editing content

| To change | Edit |
|---|---|
| Skills pills | `src/data/skills.js` |
| Testimonials | `src/data/testimonials.js` (add a `photo` field to show a picture instead of initials) |
| Software projects | `src/data/projects.js` (repo names plus fallback text) |
| Music | `src/data/music.js` (SoundCloud resource paths) |
| Section photos | `src/assets/bg-*.webp`, referenced from each section component |
| Page title and description | `index.html` |

## 🚀 Deployment

`.github/workflows/ci.yml` builds on every push. `.github/workflows/deploy.yml` syncs `dist/` to S3 and invalidates CloudFront on pushes to `main`, but only once the repository variables `AWS_ROLE_ARN`, `AWS_REGION`, `S3_BUCKET` and `CLOUDFRONT_DISTRIBUTION_ID` are set; until then the job is skipped. The comments at the top of that file list the IAM permissions the role needs.

------------------------------

### 🤝 Contributors

| Author | GitHub | Email |
|--------|:------:|:-----:|
| [Erik Irgens](https://linkedin.com/in/erik-t-irgens) | [erik-t-irgens](https://github.com/erik-t-irgens) |  [erik.t.irgens@gmail.com](mailto:erik.t.irgens@gmail.com) |

------------------------------

### ⚖️ License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See [LICENSE.txt](LICENSE.txt).

------------------------------

### 🌟 Acknowledgments

#### [Epicodus](https://www.epicodus.com/)
>"A school for tech careers... to help people learn the skills they need to get great jobs."

------------------------------

<center><a href="#">Return to Top</a></center>
