import { Component, h, Prop, Element } from '@stencil/core';
import AirIcon from '../../../assets/akar-icons/src/svg/air.svg'


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

  get svg() {
    return AirIcon
      .replace(/stroke="((?!none)[^"]+)"/g, 'stroke="currentColor"')
      .replace(/fill="((?!none)[^"]+)"/g, 'fill="currentColor"');
  }

  private _setStyle(property: string, value: string, priority?: string) {
    return this.$el.style.setProperty(property, value, priority);
  }

  render() {
    this._setStyle('--stroke', this.stroke.toString());
    this._setStyle('color', this.color);
    this._setStyle('--size', this.size+'px');
    this._setStyle('--cap', this.cap);
    this._setStyle('--join', this.join);
    return (
      <div class='svg' innerHTML={this.svg} />
    );
  }

}
