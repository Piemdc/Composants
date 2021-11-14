export function hasAuthenticated() {

    if (localStorage.getItem("user")) {
        return true;
    } else return false;

}