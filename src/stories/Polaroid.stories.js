import React from 'react';
import { storiesOf } from '@storybook/react';

import { Polaroid } from "../components/Polaroid";

const stories = storiesOf('Film', module);

stories.add('Polaroid', () => {
    return (
        <Polaroid/>
        );
});
