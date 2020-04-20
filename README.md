# FlexBoxGrid-2
[![npm version](https://badge.fury.io/js/%40wponion%2Fflexboxgrid2.svg)](https://badge.fury.io/js/%40wponion%2Fflexboxgrid2)

Modern 12 column grid system based on flex property.

→ [Documentation](https://flexboxgrid2.wponion.com/)

## Motivation
Forked from [evgenyrodionov/flexboxgrid2](https://github.com/evgenyrodionov/flexboxgrid2) because original project seems to be abandoned for me. also i required a bit more change to the core. so i forked it.

## Device Break Points
| Device Type | Min Width | Max Width |
| ----------- | --------- | -------- |
| `xs` | 0 | 575px |
| `sm` | 576px | 767px |
| `md` | 768px | 991px |
| `lg` | 992px | 1199px |
| `xl` | 1200px | ∞ |

## Grid System CSS Classes

| Class Name | Usage |
| ---------- | ---- |
| `wpo-container` | Fixed Width Container |
| `wpo-container-fluid` | Full Width Container |
| `wpo-row` | Column Row |
| `wpo-col-xs-*` |  Extra small Device Columns from `wpo-col-xs` to `wpo-col-xs-12` |
| `wpo-col-sm-*` |  Small Device Columns from `wpo-col-sm` to `wpo-col-sm-12` |
| `wpo-col-md-*` |  Medium Device Columns from `wpo-col-md` to `wpo-col-md-12` |
| `wpo-col-lg-*` |  Large Device Columns from `wpo-col-lg` to `wpo-col-lg-12` |
| `wpo-col-xl-*` |  Extra Large Device Columns from `wpo-col-xl` to `wpo-col-xl-12` |
| `wpo-col-xs-offset-*` |  Offset a div in Extra small Device Columns from `wpo-col-xs` to `wpo-col-xs-12` |
| `wpo-col-sm-offset-*` |  Offset a div in Small Device Columns from `wpo-col-sm` to `wpo-col-sm-12` |
| `wpo-col-md-offset-*` |  Offset a div in Medium Device Columns from `wpo-col-md` to `wpo-col-md-12` |
| `wpo-col-lg-offset-*` |  Offset a div in Large Device Columns from `wpo-col-lg` to `wpo-col-lg-12` |
| `wpo-col-xl-offset-*` |  Offset a div in Extra Large Device Columns from `wpo-col-xl` to `wpo-col-xl-12` |
| `wpo-reverse` |  Reversing. Works with `wpo-row` and `wpo-col-*` |



## Utilites CSS Class

| Class Name | Usage |
| ---------- | ---- |
| `wpo-no-gutters` | No Padding & No Margin used on `wpo-row` div's |
| `wpo-no-padding` | No Padding  |
| `wpo-no-margin` | No Margin |
| `wpo-hidden-*` | Sets Display None |
| `wpo-visible`, `wpo-*-visible` | CSS Visibility Set to Visible |
| `wpo-invisible`, `wpo-*-invisible` | CSS Visibility Set to Hidden |
| `wpo-float-right`, `wpo-float-*-right` | CSS Visibility Set to Visible |
| `wpo-float-left`, `wpo-float-*-left` | CSS Visibility Set to Visible |
| `wpo-float-none`, `wpo-float-*-none` | CSS Visibility Set to Hidden |
| `wpo-start-*`| Add classes to align elements  |
| `wpo-center-*`| Add classes to align elements  |
| `wpo-end-*`| Add classes to align elements  |
| `wpo-top-*`| Add classes to align elements  |
| `wpo-middle-*`| Add classes to align elements  |
| `wpo-bottom-*`| Add classes to align elements  |
| `wpo-around-*`| Add classes to distribute the contents of a row or column. |
| `wpo-between-*`| Add classes to distribute the contents of a row or column. |
| `wpo-first-*`| Add classes to reorder columns. |
| `wpo-last-*`| Add classes to reorder columns. |
| `wpo-initial-order-*`| Add classes to reorder columns. |

## Examples
[Demo](http://flexboxgrid2.wponion.com)

## Installation

### with npm

```
npm install --save @wponion/flexboxgrid2
```

---

## License
This project is licensed under **MIT**. See the [LICENSE](LICENSE) file for more info.

## Backed By
| [![DigitalOcean][do-image]][do-ref] | [![JetBrains][jb-image]][jb-ref] |  [![Tidio Chat][tidio-image]][tidio-ref] |
| --- | --- | --- |

[do-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue-small.png
[jb-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/phpstorm-small.png?v3
[tidio-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/tidiochat-small.png
[do-ref]: https://s.svarun.in/Ef
[jb-ref]: https://www.jetbrains.com
[tidio-ref]: https://tidiochat.com