import { Component, h, Prop, Element, State, Watch } from '@stencil/core';

@Component({
  tag: 'akar-icon',
  styleUrl: 'akar-icon.css',
  shadow: true,
})
export class AkarIcon {
  @Prop() name: string;
  @Element() $el: HTMLElement;
  @Prop() stroke: number = 1;
  @Prop() size: number = 24;
  @Prop() color: string = "inherit";
  @Prop() cap: string = "round";
  @Prop() join: string = "round";
  @State() svg: string = ''

  async fetchSvg(name: string) {
    if (!name) return
    const res = await fetch(`https://raw.githubusercontent.com/artcoholic/akar-icons/master/src/svg/${name}.svg`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
    })
    const data = await res.text()
    console.log(data)
    this.svg = data.replace(/stroke="((?!none)[^"]+)"/g, 'stroke="currentColor"')
    .replace(/fill="((?!none)[^"]+)"/g, 'fill="currentColor"')
  }

  @Watch('name')
  handleNameChange(newValue: string) {
    this.fetchSvg(newValue)
  }

  async componentWillLoad() {
    await this.fetchSvg(this.name)
  }

  render() {
    return (
      <div class='svg' innerHTML={this.svg} style={{
        'color': this.color,
        '--stroke': this.stroke.toString(),
        '--size': this.size + 'px',
        '--cap': this.cap,
        '--join': this.join,
      }} />
    );
  }

}
