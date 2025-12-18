import Container from './Container/ui/Container';
import { ModalProvider } from './ModalProvider/ModalProvider';
import Router from './Router/Router';

function Application() {

    return (
        <ModalProvider>
            <Container>
                <Router />
            </Container>
        </ModalProvider>
    )
}

export default Application
