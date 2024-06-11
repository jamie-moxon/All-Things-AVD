import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tips & Tricks',
    Svg: require('@site/static/img/undraw_setup_wizard_re_nday.svg').default,
    description: (
      <>
        Tips and Tricks for Deploying, managing and optimising Azure Virtual Desktop
      </>
    ),
  },
  {
    title: 'Tools and apps',
    Svg: require('@site/static/img/undraw_code_review_re_woeb.svg').default,
    description: (
      <>
        A source of the best tools and apps for an Azure Virtual Desktop environment.
      </>
    ),
  },
  {
    title: 'Optimise your environment',
    Svg: require('@site/static/img/undraw_switches_1js3.svg').default,
    description: (
      <>
        An optimised Azure Virtual Desktop environment, is a happy one! For both your users and your finance department.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
