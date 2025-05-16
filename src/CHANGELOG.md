# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 3.5.1 (2025 May 16) Conversion of Resources to [Bibliography](https://theologic.us/bibliography/)
- standardized to using [mdbook's include syntax](https://rust-lang.github.io/mdBook/format/mdbook.html#including-files)
  - `{{#include biblio-bibles.md}}`
  - `{{#include ../bibliography/biblio-books.md}}`
  - See this repo's [src/bibliography](https://github.com/joelouthan/Theologicus/tree/main/src/bibliography) for my examples
- [Turbian 9th edition](https://www.chicagomanualofstyle.org/turabian/about/about-new.html)
- ![Word Count](https://img.shields.io/badge/Word%20Count-565211-brightgreen)

## 3.5 (2025 Mar 5) [Praying Through Psalms](https://theologic.us/psalms/)

## 3.4 (2025 Jan 19) [1689 Second London Baptist Confession](https://theologic.us/confession-1689/)
## 3.3.2 (2024 Apr 10) Port 1689 to [submodule Icon - Git](https://github.com/joelouthan/volume-confession-1689)

## 3.3.1 (2024 Jan 7)

- File cleanup (mostly flattening directories for img src to work correctly) for porting to Swift aka [the iOS app for Theologicus](https://github.com/joelouthan/com.theologicus)
- Removed Vocation Resume (just not needed)
- next version: 4.0 with the iOS app being available on the App Store

## 3.3 (2023 Jul 16)

- [Apostles' Creed](creed-apostles/index.md)
- Wordcount: 695610[^wordcount]

## 3.2 (2023 Jul 4)

- [Book Reviews](reviews/index.md)
- Wordcount: 680499

## 3.1 (2023 Jun 14)

- [The Story of Ruth](ruth/index.md)
- Wordcount: 659293

## 3.0 (2023 Jun 9)

### Added

- Migrated from Hugo to mdBook
- Wordcount: 699793

<hr style="clear:both;">

## 2.4 (2023 Apr 13)

- [The Epistle to the Romans](romans/index.md)

## 2.3 (2023 Feb 8)

- [The Gospel of Mark](mark/index.md)

## 2.2 (2022 Sep 8)

- [The Pastoral Epistles](pastorals/index.md)

## 2.1 (2021 Apr 29)

- [The Gospel of Luke](luke/index.md)

## 2.0 (2020 Apr 20)

- Migrated from Wordpress to Hugo

---

## 1.3 (2019 Nov 28)

- Doctrine: The Lord's Prayer
  - *merged with [Matthew](matthew/index.md)*

## 1.2 (2018 Jul 05)

- Doctrine: Ordo Salutis (defunct) [^1]

## 1.1 (2012 Nov 28)

- Thanksgiving (defunct)

## 1 (2008 Apr 15)

- Initial release on Wordpress

---

## Versioning

Semantic Versioning will be as following:

### MAJOR 1.x

New technology. In other words, as long as I using [mdBook](https://github.com/rust-lang/mdBook), Theologicus will remain in version 3.x.x.

### MINOR 1.1

New **finished** exposition series. When the series is complete, this will bump up version from 3 to 3.1, for example.

~### PATCH 1.1.1~

~New sermons or new articles. This will go from 3 to 3.1 to 3.2 and so on.~

[^1]: Thanksgiving and Ordo Salutis will be combined into a new series called [Christ Came To Save Sinners](doctrine-christ-saves/index.md).  
[^wordcount]: Per [mdbook-wordcount](https://github.com/nomorepanic/mdbook-wordcount)
