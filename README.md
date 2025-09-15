# Competitive Programming Club at UCSD Website

This repository contains the website for the Competitive Programming Club at
UCSD.

## Hugo

This project uses Hugo. You can install Hugo [here](https://gohugo.io/installation/), and view the documentation [here](https://gohugo.io/documentation/).

## File Organization

Each page's content lives in a file in `content/[filename].md`; for example, `/teams` is in `content/teams.md`. A special case is `/` is in `content/_index.md`. You can edit the markdown content in the appropriate file to make changes to a certain page.

To create a new page, run `hugo new content content/[page-name].md` (see [here](https://gohugo.io/getting-started/quick-start/#add-content)).

Static files (e.g. images, PowerPoint presentations from past lessons) are located in `static`.

## Local Development

1. Run `hugo server -D`
2. Visit http://localhost:1313/

## Deploying Changes
To update the public website (https://ucsdicpc.github.io), push your changes to the `main` branch. This will then trigger a GitHub action that builds and pushes static files to the GitHub Pages deployment.
