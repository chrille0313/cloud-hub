import { expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from './page';
import React from 'react';
import { CloudCard } from '@/components/cards/cloud-card';
import { CreateCloudCard } from '@/components/cards/create-cloud-card';

describe('Frontend Tests: Application Specific Components', async () => {
  test('Page', () => {
    render(<Page />);
    expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
  });

  test('CloudCard renders correctly', () => {
    render(<CloudCard id={'1'} name={'CloudCardName'} usedStorage={4} allocatedStorage={5} />);
    const elementLink = screen.getByRole('link', { name: /CloudCardName/i });
    const elementName = screen.getByText('CloudCardName');
    const elementStorage = screen.getByText('4 B / 5 B');
    expect(elementLink.getAttribute('href')).toEqual('/clouds/1');
    expect(elementName).toBeDefined();
    expect(elementStorage).toBeDefined();
  });
});
