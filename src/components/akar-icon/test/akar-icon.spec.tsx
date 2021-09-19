import { newSpecPage } from '@stencil/core/testing';
import { AkarIcon } from '../akar-icon';

describe('akar-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AkarIcon],
      html: `<akar-icon></akar-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <akar-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </akar-icon>
    `);
  });
});
