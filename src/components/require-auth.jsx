
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UrlState } from "../context/UrlContext";
import { BarLoader } from "react-spinners";

function RequireAuth({ children }) {
    const navigate = useNavigate();

    const { loading, isAUTHENticated } = UrlState();

    useEffect(() => {
        if (!isAUTHENticated && loading === false) navigate("/auth");
    }, [isAUTHENticated, loading]);

    if (loading) return <BarLoader width={"100%"} color="#36d7b7" />;

    if (isAUTHENticated) return children;
}

export default RequireAuth;