const randomNums = () => {
    let nums = {}
    for (let i = 0; i < 25; i++) {
        const num = Math.floor(Math.random() * 20) + 1
        if (!nums.hasOwnProperty(num)) {
            nums = { ...nums, [num]: 1 }
        } else {
            nums[num] = nums[num] + 1
        }
    }
    return (nums);
}

export default randomNums;