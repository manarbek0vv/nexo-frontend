import Container from './tools/Container/ui/Container';
import { ModalProvider } from './tools/ModalProvider/ModalProvider';
import Router from './tools/Router/Router';

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
