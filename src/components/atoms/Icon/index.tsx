'use client'
import React, { useEffect, useState } from "react"
import utils from "./utils"
import { IconI } from "./Icon.interface"

const Icon: React.FC<IconI> = ({
	containerRef,
	color,
	path
}) => {
	const { getSvgFill } = utils();
	const [src, setSrc] = useState<string>('');

	const fillColor = containerRef?.current
		? getSvgFill(getComputedStyle(containerRef.current).backgroundColor)
		: color || '#000'; // fallback jika ref belum tersedia

	useEffect(() => {
		if (!path) return;

		fetch(path)
			.then(res => res.text())
			.then(data => {
				// Ganti semua fill dengan fill baru (optional logic)
				const updated = data.replace(/fill=".*?"/g, `fill="${fillColor}"`);
				setSrc(updated);
			});
	}, [path, fillColor]);

	return <div dangerouslySetInnerHTML={{ __html: src }} />;
}

export default Icon