import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import { Results } from '../components/Results';
import { Animal } from '@frontendmasters/pet';
import 'jest';

const testPet: Animal = {
  id: 44604528,
  organization_id: 'WA41',
  url:
    'https://www.petfinder.com/bird/russell-crow-44604528/wa/silverdale/kitsap-humane-society-wa41/?referrer_id=44e48166-8259-4b23-8420-bbd2dc9c2079',
  type: 'Bird',
  species: 'Chicken',
  breeds: {
    primary: 'Chicken',
    secondary: null,
    mixed: true,
    unknown: false,
  },
  colors: {
    primary: null,
    secondary: null,
    tertiary: null,
  },
  age: 'Adult',
  gender: 'Male',
  size: 'Medium',
  coat: null,
  attributes: {
    spayed_neutered: false,
    house_trained: false,
    declawed: null,
    special_needs: false,
    shots_current: true,
  },
  environment: {
    children: null,
    dogs: null,
    cats: null,
  },
  tags: [],
  name: 'Russell Crow',
  description:
    'Meet Russell Crow! He is a gorgeous adult rooster that could be a great addition to your flock or farm....',
  photos: [
    {
      small: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44604528/1/?bust=1556978254&width=100',
      medium: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44604528/1/?bust=1556978254&width=300',
      large: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44604528/1/?bust=1556978254&width=600',
      full: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44604528/1/?bust=1556978254',
    },
    {
      small: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44604528/2/?bust=1556978268&width=100',
      medium: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44604528/2/?bust=1556978268&width=300',
      large: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44604528/2/?bust=1556978268&width=600',
      full: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44604528/2/?bust=1556978268',
    },
  ],
  status: 'adoptable',
  published_at: '2019-05-03T12:26:26+0000',
  contact: {
    email: 'CustomerService@kitsap-humane.org',
    phone: '(360) 692-6977',
    address: {
      address1: '9167 Dickey Road NW',
      address2: null,
      city: 'Silverdale',
      state: 'WA',
      postcode: '98383',
      country: 'US',
    },
  },
  _links: {
    self: {
      href: '/v2/animals/44604528',
    },
    type: {
      href: '/v2/types/bird',
    },
    organization: {
      href: '/v2/organizations/wa41',
    },
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Results pets={[testPet]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Pet matches the snapshot', () => {
  const { debug, asFragment } = render(<Results pets={[testPet]} />);
  expect(asFragment()).toMatchSnapshot();
  // debug(asFragment());
});
