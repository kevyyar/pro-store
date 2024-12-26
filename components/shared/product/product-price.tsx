import { cn } from "@/lib/utils";

interface ProductPriceProps {
  value: number;
  className?: string;
}

const ProductPrice = ({ value, className = "" }: ProductPriceProps) => {
  const stringValue = value.toFixed(2);
  const [dollars, cents] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      <span className="text-base font-medium">{dollars}</span>
      <span className="text-xs align-super">.{cents}</span>
    </p>
  );
};

export default ProductPrice;
