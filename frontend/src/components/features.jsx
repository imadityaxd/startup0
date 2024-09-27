import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Curated Listings:',
    description:
      ' Discover innovative startups and groundbreaking ideas across various industries. We provide a comprehensive database that helps you find the perfect match for investment or collaboration.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Expert Resources',
    description:
      ' Access a wealth of knowledge with our guides, webinars, and articles crafted by industry veterans. From securing funding to mastering marketing strategies, we’ve got you covered.',
    icon: LockClosedIcon,
  },
  {
    name: 'Community Support',
    description:
      'Join a vibrant community of entrepreneurs and investors. Network, share experiences, and learn from one another in a collaborative environment that fosters growth.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Tailored Opportunities',
    description:
      'Our platform connects you with potential investors and partners tailored to your unique needs, ensuring you get the support that truly accelerates your potential.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-12 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Where Visionaries Find Support</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why Choose Us?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Choose us for innovative startups with expert teams, proven success, community focus, and a commitment to sustainability and adaptability.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
