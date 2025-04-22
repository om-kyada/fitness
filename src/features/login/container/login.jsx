import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../style/login.scss';
import '../style/login-responsive.scss';
import useAuthStore from '../../../shared/store/authStore';
import records from '../../../assets/json/records';

function Login() {
    const history = useHistory();
    const login = useAuthStore((state) => state.login);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(''); // Clear error when user types
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Find user in the records data
        const user = records.user.email === formData.email && records.user.password === formData.password ? records.user : null;

        if (user) {
            // Remove password before storing user data
            const { password, ...userWithoutPassword } = user;
            login(userWithoutPassword);
            history.push('/dashboard'); // Use history.push instead of navigate
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome Back</h1>
                <p className="subtitle">Please enter your credentials to login</p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </div>
                </form>

                <div className="additional-options">
                    <a href="#" className="forgot-password">Forgot Password?</a>
                    <p className="signup-link">
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login; 