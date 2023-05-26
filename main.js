function GenerateEmbed() {
    var fieldValue = document.getElementById("videoLink").value;
    var video = fieldValue.split(/([/=]+)/).pop();
    console.log(`[GenerateEmbed Function] The video identifier is ${video}`);

    var processedEmbed = `<iframe style="aspect-ratio:16/9;width:1024px;max-width:95%" src="https://www.youtube.com/embed/${video}" title="APR Morning Announcements" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    console.log(`[GenerateEmbed Function] The video embed has been processed.`);

    document.getElementById("embeddedVideo").innerHTML = processedEmbed;
    document.getElementById("partOne").style.display = `block`;
    }

function DisplayCode() {
    var fieldValue = document.getElementById("videoLink").value;
    var video = fieldValue.split(/([/=]+)/).pop();
    console.log(`[DisplayCode Function] The video identifier is ${video}`);
        
    var processedEmbed = `<iframe style="aspect-ratio:16/9;width:1024px;max-width:95%" src="https://www.youtube.com/embed/${video}" title="APR Morning Announcements" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    console.log(`[DisplayCode Function] The video embed has been processed.`);

    document.getElementById("codeDisplay").innerText = processedEmbed;
    document.getElementById("partTwo").style.display = `block`;
}
    
function CopyEmbed() {
    var fieldValue = document.getElementById("videoLink").value;
    var video = fieldValue.split(/([/=]+)/).pop();
    console.log(`[CopyEmbed Function] The video identifier is ${video}`);
        
    var processedEmbed = `<iframe style="aspect-ratio:16/9;width:1024px;max-width:95%" src="https://www.youtube.com/embed/${video}" title="APR Morning Announcements" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    console.log(`[CopyEmbed Function] The video embed has been processed.`);
    
    try {
        navigator.clipboard.writeText(processedEmbed);
        console.log(`Content copied to clipboard`);
    } catch (err) {
        console.error(`Failed to copy: `, err);
    }
}