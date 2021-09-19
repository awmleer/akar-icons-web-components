import { Component, h, Prop, State, Watch } from '@stencil/core';
import { fetchIcon } from '../../utils/fetch-icon';

@Component({
  tag: 'akar-icon',
  styleUrl: 'akar-icon.css',
  shadow: true,
})
export class AkarIcon {
  @Prop() name: string;
  @Prop() stroke: number = 1;
  @Prop() size: number = 24;
  @Prop() color: string = "inherit";
  @Prop() cap: string = "round";
  @Prop() join: string = "round";
  @State() svg: string = ''

  async fetchSvg(name: string) {
    this.svg = await fetchIcon(name)
  }

  @Watch('name')
  async handleNameChange(newValue: string) {
    this.svg = await fetchIcon(newValue)
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
