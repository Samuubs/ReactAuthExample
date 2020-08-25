interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function singIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: "adsa45das4ds5a6d6a4da56sd89sa4da949dasdasda",
                user: {
                    name: "Samu",
                    email: "samu@gmail.com"
                }
            })
        }, 2000)
    });
}