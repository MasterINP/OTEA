const colorButton = document.getElementById('btn');
const colorPicker = document.getElementById('cp');
const notepad = document.getElementById('notepad');
colorButton.addEventListener('mouseenter' , () => {
    const rect = colorButton.getBoundingClientRect();
    const offsetX = -131;
    const offsetY =  52;
    colorPicker.style.left = rect.left - offsetX + 'px';
    colorPicker.style.top = rect.bottom - offsetY + 'px';
    colorPicker.style.display = 'block';
});

colorPicker.addEventListener('input', (event) => {
    // Handle the selected color
    const selectedColor = event.target.value;
    console.log('Selected Color:', selectedColor);

    notepad.focus();
    document.execCommand('foreColor', false, selectedColor);
  });

function formatText(style) {
    var textEditor = document.getElementById("text-editor");
    var selectedText = window.getSelection().toString();

    // Apply the specified style to the selected text
    if (style === "bold") {
        document.execCommand("bold", false, null);
    }
    if (style === "underline") {
        document.execCommand("underline", false, null);
    }
    if (style === "italic") {
        document.execCommand("italic", false, null);
    }
    if (style === "color") {
        document.execCommand("italic", false, null);
    }
    // Align text left
    if (style === "left") {
        document.execCommand("justifyLeft", false, null);
    }

    // Align text center
    if (style === "center") {
        document.execCommand("justifyCenter", false, null);
    }

    // Align text right
    if (style === "right") {
        document.execCommand("justifyRight", false, null);
    }

    // Justify text
    if (style === "justify") {
        document.execCommand("justifyFull", false, null);
    }
    function undo() {
        document.execCommand('undo', false, null);
    }

    function redo() {
        document.execCommand('redo', false, null);
    }
    // Add other style cases for different buttons if needed

    // Clear the selection after applying the style
    window.getSelection().removeAllRanges();
}

