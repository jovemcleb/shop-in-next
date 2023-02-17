import "react-loading-skeleton/dist/skeleton.css";
import {
  SkeletonImageContainer,
  SkeletonProductContainer,
  SkeletonProductDetails,
} from "./skeleton.style";

export default function ProductSkeleton() {
  return (
    <SkeletonProductContainer>
      <SkeletonImageContainer />
      <SkeletonProductDetails>
        <div>
          <h1 className="h1"></h1>
        </div>
        <div>
          <span className="span"></span>
        </div>
        <div>
          <p className="p"></p>
        </div>
        <div>
          <p className="p"></p>
        </div>
        <div>
          <p className="p"></p>
        </div>
        <button className="button"></button>
      </SkeletonProductDetails>
    </SkeletonProductContainer>
  );
}
