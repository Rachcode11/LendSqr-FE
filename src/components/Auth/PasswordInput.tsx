import React, {CSSProperties, ReactNode} from 'react';
import eyeSlash from '../password/assets/eye-slash.svg';
import eyeOpen from '../password/assets/eye-open.svg';

interface IPasswordInputProps {
    value: string;
    onChange: (value: string) => void;
    style?: CSSProperties;
    showPassword: boolean; // Receive showPassword prop
    togglePasswordVisibility: () => void; // Receive toggle function prop
    children ?: ReactNode;
}

function PasswordInput({
                           value,
                           onChange,
                           style,
                           showPassword,
                           togglePasswordVisibility,
                           children,
                       }: IPasswordInputProps) {
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <input
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={handlePasswordChange}
                style={style}
            />

            {showPassword ? (
                <img
                    src={eyeSlash}
                    alt="Eye Slash"
                    onClick={togglePasswordVisibility}
                />
            ) : (
                <img src={eyeOpen} alt="Eye" onClick={togglePasswordVisibility} />
            )}

            {children}
        </div>
    );
}

export default PasswordInput;
