 
        // Sample doctor data
        const doctors = [
            {
                id: 1,
                name: "Dr. Sarah Johnson",
                specialty: "Cardiology",
                department: "Cardiology",
                education: "MD, FACC, Harvard Medical School",
                experience: "15 years",
                availability: "available",
                newPatients: true,
                telehealth: true,
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
            {
                id: 2,
                name: "Dr. Michael Chen",
                specialty: "Neurology",
                department: "Neurology",
                education: "MD, PhD, Johns Hopkins University",
                experience: "12 years",
                availability: "available",
                newPatients: true,
                telehealth: true,
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80"
            },
            {
                id: 3,
                name: "Dr. Amanda Rodriguez",
                specialty: "Pediatrics",
                department: "Pediatrics",
                education: "MD, FAAP, Stanford University",
                experience: "10 years",
                availability: "available",
                newPatients: false,
                telehealth: true,
                image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            },
            {
                id: 4,
                name: "Dr. James Wilson",
                specialty: "Orthopedics",
                department: "Orthopedics",
                education: "MD, FACS, Mayo Clinic",
                experience: "18 years",
                availability: "available",
                newPatients: true,
                telehealth: false,
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            },
            {
                id: 5,
                name: "Dr. Lisa Patel",
                specialty: "Dermatology",
                department: "Internal Medicine",
                education: "MD, FAAD, Yale School of Medicine",
                experience: "9 years",
                availability: "available",
                newPatients: true,
                telehealth: true,
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
            {
                id: 6,
                name: "Dr. Robert Kim",
                specialty: "Oncology",
                department: "Internal Medicine",
                education: "MD, PhD, MD Anderson Cancer Center",
                experience: "14 years",
                availability: "available",
                newPatients: true,
                telehealth: false,
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            },
            {
                id: 7,
                name: "Dr. Emily White",
                specialty: "Gastroenterology",
                department: "Internal Medicine",
                education: "MD, FACG, Cleveland Clinic",
                experience: "11 years",
                availability: "available",
                newPatients: false,
                telehealth: true,
                image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
            },
            {
                id: 8,
                name: "Dr. David Brown",
                specialty: "Endocrinology",
                department: "Internal Medicine",
                education: "MD, FRCP, Massachusetts General Hospital",
                experience: "16 years",
                availability: "available",
                newPatients: true,
                telehealth: true,
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
        ];

        // Mobile Navigation Menu
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const overlay = document.querySelector('.overlay');
        const body = document.body;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
        });

        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                overlay.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Function to render doctors
        function renderDoctors(doctorsToRender) {
            const doctorsGrid = document.getElementById('doctorsGrid');
            doctorsGrid.innerHTML = '';
            
            if (doctorsToRender.length === 0) {
                doctorsGrid.innerHTML = '<div class="no-doctors" style="grid-column: 1/-1; text-align: center; padding: 40px;"><h3>No doctors found matching your criteria</h3><p>Try adjusting your search or filters</p></div>';
                return;
            }
            
            doctorsToRender.forEach(doctor => {
                const doctorCard = document.createElement('div');
                doctorCard.className = 'doctor-card';
                doctorCard.innerHTML = `
                    <div class="doctor-image">
                        <img src="${doctor.image}" alt="${doctor.name}">
                    </div>
                    <div class="doctor-details">
                        <h3 class="doctor-name">${doctor.name}</h3>
                        <span class="doctor-specialty">${doctor.specialty}</span>
                        <p class="doctor-education">${doctor.education}</p>
                        <div class="doctor-meta">
                            <div><i class="fas fa-briefcase"></i> ${doctor.experience}</div>
                            <div>${doctor.newPatients ? '<i class="fas fa-user-plus"></i> New Patients' : ''}</div>
                            <div>${doctor.telehealth ? '<i class="fas fa-video"></i> Telehealth' : ''}</div>
                        </div>
                        <div class="doctor-actions">
                            <button class="btn btn-primary">View Profile</button>
                            <button class="btn btn-outline">Book Appointment</button>
                        </div>
                    </div>
                `;
                doctorsGrid.appendChild(doctorCard);
            });
        }

        // Initial render
        renderDoctors(doctors);

        // Search and filter functionality
        const searchInput = document.getElementById('doctorSearch');
        const specialtyFilter = document.getElementById('specialtyFilter');
        const departmentFilter = document.getElementById('departmentFilter');
        const availabilityFilter = document.getElementById('availabilityFilter');
        const searchButton = document.getElementById('searchButton');

        function filterDoctors() {
            const searchText = searchInput.value.toLowerCase();
            const specialtyValue = specialtyFilter.value;
            const departmentValue = departmentFilter.value;
            const availabilityValue = availabilityFilter.value;
            
            const filteredDoctors = doctors.filter(doctor => {
                // Search text filter
                const matchesSearch = searchText === '' || 
                    doctor.name.toLowerCase().includes(searchText) ||
                    doctor.specialty.toLowerCase().includes(searchText) ||
                    doctor.department.toLowerCase().includes(searchText);
                
                // Specialty filter
                const matchesSpecialty = specialtyValue === '' || doctor.specialty === specialtyValue;
                
                // Department filter
                const matchesDepartment = departmentValue === '' || doctor.department === departmentValue;
                
                // Availability filter
                let matchesAvailability = true;
                if (availabilityValue === 'available') {
                    matchesAvailability = doctor.availability === 'available';
                } else if (availabilityValue === 'new') {
                    matchesAvailability = doctor.newPatients === true;
                } else if (availabilityValue === 'telehealth') {
                    matchesAvailability = doctor.telehealth === true;
                }
                
                return matchesSearch && matchesSpecialty && matchesDepartment && matchesAvailability;
            });
            
            renderDoctors(filteredDoctors);
        }

        // Event listeners for filtering
        searchInput.addEventListener('keyup', filterDoctors);
        searchButton.addEventListener('click', filterDoctors);
        specialtyFilter.addEventListener('change', filterDoctors);
        departmentFilter.addEventListener('change', filterDoctors);
        availabilityFilter.addEventListener('change', filterDoctors);

        // Pagination functionality
        const pageButtons = document.querySelectorAll('.page-btn');
        
        pageButtons.forEach(button => {
            button.addEventListener('click', () => {
                pageButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                // In a real application, this would load the appropriate page of results
            });
        });
  