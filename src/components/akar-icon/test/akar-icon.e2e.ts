import { newE2EPage } from '@stencil/core/testing';

describe('akar-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<akar-icon></akar-icon>');

    const element = await page.find('akar-icon');
    expect(element).toHaveClass('hydrated');
  });
});
