//Carga  una lista de notas en un contenedor HTML específico.
export const UI = {
    drawNotes: (notes, div) => {
        div.innerHTML = ""; 

        notes.forEach(note => {
            // Formatea la fecha en AAAA-MM-DD
            const formattedDate = new Date(note.creationDate).toISOString().slice(0, 10);
            div.innerHTML += `
                <div class="note">
                    <h2>Note</h2>
                    <p><strong>Type:</strong> ${note.type}</p>
                    <p><strong>Content:</strong> ${note.content}</p>
                    <p><strong>Creation Date:</strong> ${formattedDate}</p>
                </div>
            `;
        });
    }
};
