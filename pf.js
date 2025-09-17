// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Allow user to change profile image locally
const imgInput = document.getElementById('imgInput');
const profileImg = document.getElementById('profileImg');
imgInput.addEventListener('change', (e)=>{
  const file = e.target.files[0];
  if(!file) return;
  profileImg.src = URL.createObjectURL(file);
});

// Download a simple CV text file
document.getElementById('downloadCV').addEventListener('click', ()=>{
  const text = `Thirumala Kumar Addanki
Web Developer
Email: thirumala@example.com
Skills: HTML, CSS, JavaScript`;
  const blob = new Blob([text], {type:'text/plain'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Thirumala_Kumar_Addanki_CV.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
});

// Shortcut: Press "P" to jump to projects
document.addEventListener('keydown', (e)=>{
  if(e.key.toLowerCase() === 'p'){
    location.hash = '#projects';
  }
});
