import { Route, Redirect } from 'react-router-dom';
import useAuthStore from '../../shared/store/authStore';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute; 