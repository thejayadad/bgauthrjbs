import React from 'react'

const Feature = () => {
  return (
    <section className='mt-5'>
      <div class="background d-flex jusitfy-content-center align-items-center">
        <div class="container">

            <div class="features d-flex flex-column justify-content-center align-items-center gap-4 py-5 text-center">
                <div class="features-header">
                    <h2 class="h2 text-white">More than just a tool</h2>
                    <small class="text-white-50">Explore what else we can do for you</small>
                </div>

                <div class="features-body d-grid text-white">
                    <section class="feature-item d-flex flex-column gap-1 rounded-4 p-5 first-gradient">
                        <i class="feature-icon rounded-pill bi-clipboard"></i>
                        <strong class="feature-title">Project Management</strong>
                        <small class="feature-subtitle text-white-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore.</small>
                        <a href="#" class="text-white">Read More</a>
                    </section>

                    <section class="feature-item d-flex flex-column gap-1 rounded-4 p-5 second-gradient">
                        <i class="feature-icon rounded-pill bi-clipboard"></i>
                        <strong class="feature-title">Time Tracking</strong>
                        <small class="feature-subtitle text-white-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore.</small>
                        <a href="#" class="text-white">Read More</a>
                    </section>

                    <section class="feature-item d-flex flex-column gap-1 rounded-4 p-5 third-gradient">
                        <i class="feature-icon rounded-pill bi-clipboard"></i>
                        <strong class="feature-title">Resource Planing</strong>
                        <small class="feature-subtitle text-white-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore.</small>
                        <a href="#" class="text-white">Read More</a>
                    </section>

                    <section class="feature-item d-flex flex-column gap-1 rounded-4 p-5 fourth-gradient">
                        <i class="feature-icon rounded-pill bi-clipboard"></i>
                        <strong class="feature-title">Invoicing</strong>
                        <small class="feature-subtitle text-white-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore.</small>
                        <a href="#" class="text-white">Read More</a>
                    </section>
                </div>
            </div>

        </div>
    </div>
</section>
  )
}

export default Feature