# Theologicus
<img style="float:right; border-radius: 4px; margin-right: 15px; margin-bottom: 10px" src="src/logo-theologicus.png" width="100" align="right">Still no pen, no words, no image  
can express to you the loveliness  
of my only, only Lord Jesus.  
\- Samuel Rutherford

## upcoming

- [1 Samuel](https://theologic.us/samuel-1/index.html)
- [Matthew](https://theologic.us/matthew/index.md)
- [Christ Came to Save Sinners](https://theologic.us/doctrine-christ-saves/index.html)

## releases

- v3.5 (2025 Mar 5) [Praying Through Psalms](https://theologic.us/psalms/)
- v3.4 (2025 Jan 19) [1689 Second London Baptist Confession](https://theologic.us/confession-1689/index.md)
- v3.3.2 (2024 Apr 10) Port 1689 to [submodule](https://github.com/joelouthan/theologicus-1689) <img src="icon-git.png" alt="Icon - Git" width="15">
- v3.3.1 (2024 Jan 7) [Swift port](https://github.com/joelouthan/com.theologicus) <img src="icon-swift.png" alt="Icon - Swiftui" width="15">
- v3.3 (2023 Jul 16) [Apostles' Creed](https://theologic.us/creed-apostles/index.md)
- v3.2 (2023 Jul 04) [Book Reviews](https://theologic.us/reviews/index.md)
- v3.1 (2023 Jun 14) [Ruth](https://theologic.us/ruth/index.md)
- v3.0 (2023 Jun 09) [Hugo to mdBook](https://theologic.us) <img style="background: #ffffff" src="icon-mdbook.jpg" alt="Icon - mdbook - command line tool for creating books written in Markdown--written in Rust" width="15">
- v2.4 (2023 Apr 13) [The Epistle to the Romans](https://theologic.us/romans/index.md)
- v2.3 (2023 Feb 08) [The Gospel of Mark](https://theologic.us/mark/index.md)
- v2.2 (2022 Sep 08) [The Pastoral Epistles](https://theologic.us/pastorals/index.md)
- v2.1 (2021 Apr 29) [The Gospel of Luke](https://theologic.us/luke/index.md)
- v2.0 (2020 Apr 20) [Wordpress to Hugo](https://github.com/joelouthan/theologic.us) <img src="icon-hugo.png" alt="Icon - Hugo Static Site Generator" width="15">

## running

![Crates.io](https://img.shields.io/crates/v/mdbook)
![Crates.io](https://img.shields.io/crates/v/mdbook-toc)

## using

[![tools]( https://go-skill-icons.vercel.app/api/icons?i=vscode,vim,rust,md,css,html,bash,git,github,apple,netlify,linux,redhat)]()

## built on

<a href="https://www.netlify.com"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /></a>

## diagram

*Thanks to @ahmedkhaleel2004 for [GitDiagram](https://github.com/ahmedkhaleel2004/gitdiagram). Get yours at [GitDiagram.com](https://gitdiagram.com/).*

```mermaid
graph TD
    %% Content Source
    subgraph "Content Source"
        CR("Content Repository (src)")
    end

    %% Configuration & Metadata
    subgraph "Configuration & Metadata"
        Config("Build Config (book.toml)")
        Lint(".markdownlint.json")
    end

    %% Build Process
    subgraph "Build Process"
        Builder("Static Site Generator (mdBook)")
        TOC("mdbook-toc (TOC Tool)")
    end

    %% Theme & Presentation
    subgraph "Theme & Presentation"
        Head("Template: head.hbs")
        Index("Template: index.hbs")
        CSS("CSS Files")
        BookJS("book.js")
    end

    %% Deployment Pipeline
    subgraph "Deployment Pipeline"
        Netlify("Netlify Deployment (netlify)")
        Edge("Edge Functions")
        Website("Final Website (HTML/CSS/JS)")
    end

    %% Developer Tools
    subgraph "Developer Tools"
        VSCode("VSCode (.vscode)")
        Workspace("Workspace Config (theologicus.code-workspace)")
    end

    %% Relationships
    CR -->|"feeds"| Builder
    Config -->|"configures"| Builder
    Lint -->|"enforces"| Builder

    Head -->|"applies"| Builder
    Index -->|"applies"| Builder
    CSS -->|"applies"| Builder
    BookJS -->|"applies"| Builder

    Builder -->|"callsTOC"| TOC
    Builder -->|"buildsSite"| Netlify
    Netlify -->|"includes"| Edge
    Edge -->|"serves"| Website

    VSCode -->|"supports"| CR
    VSCode -->|"supports"| Builder
    Workspace -->|"supports"| CR
    Workspace -->|"supports"| Builder

    %% Click Events
    click CR "https://github.com/joelouthan/theologicus/tree/main/src/"
    click Config "https://github.com/joelouthan/theologicus/blob/main/book.toml"
    click Lint "https://github.com/joelouthan/theologicus/blob/main/.markdownlint.json"
    click TOC "https://github.com/joelouthan/theologicus/tree/main/bin/bin/mdbook-toc"
    click Head "https://github.com/joelouthan/theologicus/blob/main/theme/head.hbs"
    click Index "https://github.com/joelouthan/theologicus/blob/main/theme/index.hbs"
    click CSS "https://github.com/joelouthan/theologicus/tree/main/theme/css/"
    click BookJS "https://github.com/joelouthan/theologicus/blob/main/theme/book.js"
    click Netlify "https://github.com/joelouthan/theologicus/tree/main/netlify/"
    click Edge "https://github.com/joelouthan/theologicus/tree/main/netlify/edge-functions/"
    click VSCode "https://github.com/joelouthan/theologicus/tree/main/.vscode/"
    click Workspace "https://github.com/joelouthan/theologicus/blob/main/theologicus.code-workspace"

    %% Styles
    classDef content fill:#AED6F1,stroke:#1F618D,stroke-width:2px;
    classDef config fill:#F9E79F,stroke:#B7950B,stroke-width:2px;
    classDef build fill:#A9DFBF,stroke:#145A32,stroke-width:2px;
    classDef theme fill:#F5CBA7,stroke:#7D6608,stroke-width:2px;
    classDef deploy fill:#D7BDE2,stroke:#6C3483,stroke-width:2px;
    classDef dev fill:#FAD7A0,stroke:#884EA0,stroke-width:2px;
    
    class CR content;
    class Config,Lint config;
    class Builder,TOC build;
    class Head,Index,CSS,BookJS theme;
    class Netlify,Edge,Website deploy;
    class VSCode,Workspace dev;
```

## contact me

[![Cell](https://img.shields.io/badge/SMS-joseph-437790?style=flat-square&logo=Apple)](sms:8177071486)
[![Email](https://img.shields.io/badge/Email-joseph-success?style=flat-square&logo=Minutemailer)](mailto:joe@theologic.us)
