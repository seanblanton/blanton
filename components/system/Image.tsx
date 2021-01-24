import { default as NextImage } from "next/image";
import styled from "@emotion/styled";
import Atoms from "@/system/atoms";

const Container = styled.div`
	border-radius: ${Atoms.borderRadius.small};
	background: white;
`;

export default function Image({
	id,
	src,
	alt,
}: {
	id?: string;
	src: string;
	alt?: string;
}) {
	return (
		<Container>
			<NextImage
				alt={alt}
				src={`/uploads/${src}`}
				height={320}
				width={900}
				id={id}
			/>
		</Container>
	);
}
