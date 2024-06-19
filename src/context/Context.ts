import { ContactUsContextProps } from '@/context/contactus.vm';
import { createContext} from 'react';


const ContactUsContext = createContext({} as ContactUsContextProps);
ContactUsContext.displayName='Context ContactUs';

export default ContactUsContext;
