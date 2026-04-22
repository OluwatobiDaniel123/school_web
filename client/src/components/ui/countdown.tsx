import {useState, useEffect} from "react";
import {Clock} from "lucide-react";
import {cn} from "@/lib/utils";

interface CountdownProps {
    targetDate: Date | string;
    className?: string;
    variant?: "default" | "compact" | "minimal";
    showIcon?: boolean;
}

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
}

// const calculateTimeRemaining = (targetDate: Date): TimeRemaining => {
//   const now = new Date().getTime();
//   const target = targetDate.getTime();
//   const difference = target - now;

//   if (difference <= 0) {
//     return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
//   }

//   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//   return { days, hours, minutes, seconds, isExpired: false };
// };

const calculateTimeRemaining = (targetDate: Date | string): TimeRemaining => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();

    if (isNaN(target)) {
        return {days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true};
    }

    const difference = target - now;

    if (difference <= 0) {
        return {days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true};
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {days, hours, minutes, seconds, isExpired: false};
};

const formatTimeUnit = (value: number): string => {
    return value.toString().padStart(2, "0");
};

export const Countdown = ({targetDate, className, variant = "default", showIcon = true}: CountdownProps) => {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining(targetDate));

    // Debug logging
    console.log("Countdown rendered with targetDate:", targetDate, "timeRemaining:", timeRemaining);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeRemaining.isExpired) {
        return (
            <div className={cn("flex items-center gap-1 text-red-600", className)}>
                {showIcon && <Clock className="h-4 w-4" />}
                <span className="text-sm font-medium">Expired</span>
            </div>
        );
    }

    const formatTime = () => {
        switch (variant) {
            case "compact":
                if (timeRemaining.days > 0) {
                    return `${timeRemaining.days}d ${formatTimeUnit(timeRemaining.hours)}h`;
                }
                return `${formatTimeUnit(timeRemaining.hours)}:${formatTimeUnit(timeRemaining.minutes)}`;

            case "minimal":
                if (timeRemaining.days > 0) {
                    return `${timeRemaining.days}d`;
                }
                if (timeRemaining.hours > 0) {
                    return `${timeRemaining.hours}h`;
                }
                return `${timeRemaining.minutes}m`;

            default:
                return `${formatTimeUnit(timeRemaining.days)}d ${formatTimeUnit(timeRemaining.hours)}h ${formatTimeUnit(
                    timeRemaining.minutes
                )}m`;
        }
    };

    const getColorClass = () => {
        if (timeRemaining.days === 0 && timeRemaining.hours < 2) {
            return "text-red-600";
        }
        if (timeRemaining.days === 0 && timeRemaining.hours < 24) {
            return "text-orange-600";
        }
        if (timeRemaining.days < 3) {
            return "text-yellow-600";
        }
        return "text-green-600";
    };

    return (
        <div className={cn("flex items-center gap-1", getColorClass(), className)}>
            {showIcon && <Clock className="h-4 w-4" />}
            <span className="text-sm font-medium">{formatTime()}</span>
        </div>
    );
};
