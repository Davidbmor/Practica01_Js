export const UI =  {
    drawNotes: (notes, div) => {
        div.innerHTML = ""; 

        notes.forEach(note => {
            div.innerHTML += `
                <div class="note">
                    <p><strong>Type:</strong> ${note.type}</p>
                    <p><strong>Content:</strong> ${note.content}</p>
                    <p><strong>Creation Date:</strong> ${note.creationDate}</p>
                </div>
            `;
        });
    }
};
