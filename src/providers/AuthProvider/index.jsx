import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useAuthProviderViewModel } from "./useAuthProviderViewModel";

export const AuthProvider = ({ children }) => {
  const { user, isLoading, register, login, loginWithGoogle, logout } =
    useAuthProviderViewModel();

  return (
    <AuthContext.Provider
      value={{ user, isLoading, register, login, loginWithGoogle, logout }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
