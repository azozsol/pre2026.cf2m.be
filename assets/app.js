import { registerReactControllerComponents } from '@symfony/ux-react';
import './stimulus_bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import './styles/tokens.css';
import './styles/layout.css';
import 'bootstrap';
import './controllers/csrf_protection_controller.js';

registerReactControllerComponents();