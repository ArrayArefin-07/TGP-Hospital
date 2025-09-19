  
    // small profile modal system
    const profiles = {
      meddir: {
        name: 'Dr. Sarah Johnson', role: 'Medical Director', email: 'md@tgphospital.com',
        content: `<p><strong>Qualifications:</strong> MD, FACP</p><p>Leads clinical governance, physician recruitment and protocols. Dr. Johnson champions patient safety and evidence-based pathways across acute and ambulatory services. She has 14 years of experience in tertiary care and has led multiple quality improvement programs that reduced readmission rates.</p>`
      },
      cno: {
        name: 'Ms. Farzana Begum', role: 'Chief Nursing Officer', email: 'nursing@tgphospital.com',
        content: `<p><strong>Qualifications:</strong> MSc Nursing, RN</p><p>Ms. Begum is responsible for nursing workforce development, patient experience in inpatient wards and clinical governance for nursing practice. She has implemented nurse-led rapid response protocols and mentorship programs.</p>`
      },
      surg: {
        name: 'Prof. James Wilson', role: 'Head of Surgery', email: 'surgery@tgphospital.com',
        content: `<p><strong>Qualifications:</strong> MD, FACS</p><p>Prof. Wilson oversees the surgical department, training in minimally invasive techniques and trauma pathways. He has developed fast-track post-op protocols and mentored junior surgeons.</p>`
      },
      research: {
        name: 'Dr. Michael Chen', role: 'Head of Research & Education', email: 'research@tgphospital.com',
        content: `<p><strong>Qualifications:</strong> MD, PhD</p><p>Dr. Chen leads clinical audits, research collaborations and our education program with regional medical colleges. He focuses on pragmatic trials and quality improvement research.</p>`
      },
      cfo: {
        name: 'Mr. Mohammad Karim', role: 'Chief Finance Officer', email: 'finance@tgphospital.com',
        content: `<p><strong>Qualifications:</strong> MBA, ACCA</p><p>Mr. Karim manages financial planning, capital allocation and cost-efficiency programs to ensure sustainable growth while protecting clinical priorities.</p>`
      },
      it: {
        name: 'Ms. Laila Ahmed', role: 'Head of IT & Digital', email: 'it@tgphospital.com',
        content: `<p><strong>Qualifications:</strong> MSc IT</p><p>Ms. Ahmed leads our EHR program, digital front-door projects and data governance to enable safer, faster patient journeys.</p>`
      },
      outreach: {
        name: 'Mr. Rafique Hussain', role: 'Head of Community Outreach', email: 'outreach@tgphospital.com',
        content: `<p><strong>Qualifications:</strong> MPH</p><p>Mr. Hussain coordinates screening camps, prevention programs and partnerships with NGOs to extend care beyond our walls.</p>`
      }
    }

    // open modal when a profile button is clicked
    document.querySelectorAll('[data-profile]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const id = btn.dataset.profile
        const profile = profiles[id]
        if(profile){
          document.getElementById('modalName').textContent = profile.name
          document.getElementById('modalRole').textContent = profile.role
          document.getElementById('modalContent').innerHTML = profile.content
          document.getElementById('modalEmail').href = 'mailto:'+profile.email
          document.getElementById('modalEmail').textContent = 'Contact: '+profile.email
          document.getElementById('profileModal').classList.add('show')
          document.getElementById('profileModal').setAttribute('aria-hidden','false')
        }
      })
    })
    document.getElementById('modalClose').addEventListener('click',()=>{document.getElementById('profileModal').classList.remove('show');document.getElementById('profileModal').setAttribute('aria-hidden','true')})
    document.getElementById('profileModal').addEventListener('click',e=>{if(e.target===document.getElementById('profileModal')){document.getElementById('profileModal').classList.remove('show');document.getElementById('profileModal').setAttribute('aria-hidden','true')}})

    // quick hook for featured CEO bio button
    document.getElementById('viewBioCEO').addEventListener('click',()=>{
      document.getElementById('modalName').textContent = 'Dr. Amina Rahman'
      document.getElementById('modalRole').textContent = 'Chief Executive Officer'
      document.getElementById('modalContent').innerHTML = `<p><strong>Qualifications:</strong> MBBS, MD</p><p>Dr. Rahman has 18+ years of clinical and leadership experience. She focuses on system-level improvement, partnerships and clinical quality. Under her leadership the hospital expanded specialty services and digital access programs.</p>`
      document.getElementById('modalEmail').href = 'mailto:ceo@tgphospital.com'
      document.getElementById('modalEmail').textContent = 'Contact: ceo@tgphospital.com'
      document.getElementById('profileModal').classList.add('show')
      document.getElementById('profileModal').setAttribute('aria-hidden','false')
    })

    // expose editable JSON to window for developers
    window.TGP_LEADERSHIP_DATA = profiles
  