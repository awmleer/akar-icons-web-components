# AkarIcons Web Components

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square) ![](https://img.shields.io/badge/build-passing-success) [![](https://img.shields.io/npm/dm/akar-icons-web-components.svg)](https://www.npmjs.com/package/akar-icons-web-components) ![](http://img.shields.io/badge/license-MIT-lightgrey) [![](https://data.jsdelivr.com/v1/package/npm/akar-icons-web-components/badge)](https://www.jsdelivr.com/package/npm/akar-icons-web-components)


[AkarIcons Web Components](https://github.com/awmleer/akar-icons-web-components) is a non-official [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) wrapper for the amazing [AkarIcons](https://akaricons.com/).

Also a handy icon framework for dynamically customizable icons.

## Features

- Framework **INDEPENDENT**, [AkarIcons Web Components](https://github.com/awmleer/akar-icons-web-components) can be **DIRECTLY** used in **ANY** frameworks: [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), you name it
- With **lazy loading** icons, the main script weighs **~4KB**, loading each uncached icon costs **~0.5KB** increacement
- Fully customizable, dynamically changing color is ancient, what about changing **`stroke-width`** and **`line-style`** **ON THE FLY**?

See more about the design philosophies in [this article](https://todo.dev)!

## Get Started

```html
<script src="https://cdn.jsdelivr.net/npm/akar-icons-web-components" type="module"></script>

<body>
  <akar-icon name="bicycle">
</body>
```

And voilà, the icon is ready.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="LYLddpd" data-editable="true" data-user="john-theo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/john-theo/pen/LYLddpd">
  akar-icons-web-components-demo</a> by John Theo (<a href="https://codepen.io/john-theo">@john-theo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Advanced Usage

### Appetizer

Note on the top right corner of the CodePen above, there is a dropdown menu. Open and have fun with it.

> Value for the `name` field can be copied from [AkarIcons homepage](https://akaricons.com/) without the `ai-` prefix, eg. `arrow-left`

### Main Course

Everything the menu changes, is simply attributes for the `<akar-icon>` tag.

So `<akar-icon name="air" size="50">` will be rendered as a 50px ✕ 50px AkarIcons air icon.

**Attributes**

| Attribute | Type     | Css Var    | Default     |
| --------- | -------- | ---------- | ----------- |
| `name`    | `string` |            | (Required)  |
| `size`    | `number` | `--size`   | `24`        |
| `color`   | `string` | `color`    | `"inherit"` |
| `stroke`  | `number` | `--stroke` | `1`         |
| `cap`     | `enum`   | `--cap`    | `"round"`   |
| `join`    | `enum`   | `--join`   | `"round"`   |

> Valid values for `cap` and `join` can be found [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap) and [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin).

Try the following examples:

```html
<akar-icon name="bicycle" size="50" cap="butt" join="miter"/> </akar-icon>
```

```html
<akar-icon name="air" stroke="2" style="transform: scaleX(-1)"/> </akar-icon>
```

Or set a universal style for all `<akar-icon>`s:

```html
<style>
  akar-icon {
    --cap: butt;
  }
</style>
```

Yes, you can do that! 😇

## Features (May be) Coming

- Visual alignment adjustment configs
- Framework(React, etc)-friendly wrappers
- Dichromatic Icons
- SVG ANIMATIONS 🤟


## Change log

- **`0.1/0.2`** Sep 19, 2021. First commit!

## Dev Preparations

```bash
git clone git@github.com:awmleer/akar-icons-web-components.git
yarn run start
```

## Authors

<div class="github-card" data-github="awmleer" data-width="400" data-height="" data-theme="default"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

<div class="github-card" data-github="John-Theo" data-width="400" data-height="" data-theme="default"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>

## License
MIT License, Copyright © 2021-present @awmleer and @John-Theo.