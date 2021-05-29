import toast from "react-hot-toast";

export default function useSnackBar() {
    const showSnackbar = (message = "", type = "") => {
        console.log("CAlled");
        switch (type) {
            case "success":
                return toast.success(message);
            case "error":
                return toast.error(message);
            case "loading":
                return toast.loading(message);
            case "blank":
                return toast.blank(message);
            default:
                return toast(message);
        }
    };

    const hideSnackBar = (snackBarID) => {
        toast.dismiss(snackBarID);
    };

    return {
        showSnackbar,
        hideSnackBar,
    };
}
