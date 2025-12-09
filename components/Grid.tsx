import { gridItems } from '@/data/index';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({ id, title, description, className, img, titleClassName, imgClassName, spareImg }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
