import React from 'react';
import { storiesOf } from '@storybook/react';

import { Polaroid } from "../components/Polaroid";

const stories = storiesOf('Film', module);

stories.add('Polaroid', () => {
    return (<Polaroid
        imgurl="https://scontent.xx.fbcdn.net/v/t1.15752-9/239575898_2189547184520858_2608729839477295887_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=xk3rW6cZwNYAX8aXAiN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=7b338ee3415e8bab76080d801015f214&oe=61437347"
        size="1"
        photoScale="5"
        positionTop="50"
        positionLeft="30"
        />);
});
