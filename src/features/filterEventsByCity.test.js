import { render } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';


const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {

});
  