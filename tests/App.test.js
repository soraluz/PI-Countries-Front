import React from 'react';

import { Route } from "react-router-dom";
import App from '../App';
import { shallow } from 'enzyme'

describe('<App />', () => {
    let app;
    beforeEach(() => {
        app = shallow(<App />);
        expect(app).toBeTruthy();
    });
	 
	it('Debería tener una ruta con el texto que cambie hacia "/"', () => {
        // El orden en el que se declaran las rutas es importante!
        expect(app.find(Route).at(0).prop('path')).toEqual('/');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/Home"', () => {
        // El orden en el que se declaran las rutas es importante!
        expect(app.find(Route).at(1).prop('path')).toEqual('/Home');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/Detail/:id"', () => {
        // El orden en el que se declaran las rutas es importante!
        expect(app.find(Route).at(2).prop('path')).toEqual('/Detail/:id');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/Create"', () => {
        // El orden en el que se declaran las rutas es importante!
        expect(app.find(Route).at(3).prop('path')).toEqual('/Create');
    });

});
