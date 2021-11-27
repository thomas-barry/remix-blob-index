import { useLoaderData, json, Link } from "remix"

export let loader = () => {
    let data = {}
    return json(data)
}

export let meta = () => {
    return {
        title: "Remix Starter Application",
        description: "Remix Starter Application"
    }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
    let data = useLoaderData()

    return (
        <div className="remix__page">
            <main>
                <h2>Remix Starter Application</h2>
            </main>
        </div>
    )
}
