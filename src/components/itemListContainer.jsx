import "./itemListContainer.css"

// eslint-disable-next-line react/prop-types
export default function itemListContainer({ greeting }) {

    return (
        <>
        <section>
            <h2>{greeting}</h2>
        </section>
        </>
    );
}