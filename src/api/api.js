import request from "@/api/util"

export function Login() {
    return request("/api/Login.php", "post", { username: "admin", password: "123456" })
}