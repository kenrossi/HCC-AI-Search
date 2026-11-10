import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { serviceNavItems } from './searchPaletteData';
import { SearchServiceDetail, SearchServicesPanel } from './SearchServicesPanel';

describe('Downloads simple-list service menu', () => {
  it('places Downloads after Deploy and opens the simple product list', async () => {
    const user = userEvent.setup();
    const onNavigate = jest.fn();
    const Harness = () => {
      const [id, setId] = React.useState('deploy');
      const item = serviceNavItems.find((entry) => entry.id === id)!;
      return (
        <>
          <SearchServicesPanel selectedItemId={id} onSelectService={setId} onNavigate={onNavigate} />
          <SearchServiceDetail item={item} favoritedItems={new Set()} onToggleFavorite={jest.fn()} onNavigate={onNavigate} />
        </>
      );
    };

    const { container } = render(<Harness />);
    const deploy = screen.getByRole('menuitem', { name: 'Deploy' });
    deploy.focus();

    await user.keyboard('{ArrowDown}');

    expect(screen.getByRole('menuitem', { name: 'Downloads' })).toHaveFocus();
    await user.keyboard('{Enter}');

    const detail = container.querySelector('[data-ouia-component-id="downloads-service-detail"]') as HTMLElement;
    expect(detail).toBeInTheDocument();
    expect(within(detail).getByRole('heading', { name: 'Downloads' })).toBeVisible();
    expect(within(detail).getByText('Product downloads')).toBeVisible();

    const rhel = within(detail).getByRole('menuitem', { name: /Red Hat Enterprise Linux/ });
    rhel.focus();
    await user.keyboard('{Enter}');
    expect(onNavigate).toHaveBeenLastCalledWith({ route: '/downloads/products/rhel?entry=services' });

    await user.click(within(detail).getByRole('button', { name: 'Browse all Downloads' }));
    expect(onNavigate).toHaveBeenLastCalledWith({ route: '/downloads?entry=services' });
  });
});
